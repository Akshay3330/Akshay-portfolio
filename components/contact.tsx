"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    company: "", // honeypot
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const { toast } = useToast()

  // EmailJS
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_micd9hj"
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_4z0wqip"
  const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY  || "JUu9RcEtlojhVAa1F"

  // reCAPTCHA
  const RECAPTCHA_SITE_KEY =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Les2LUrAAAAACAEgnqh_x7Ln1gPpPzVRPZF1xeq"

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    if (!formData.name.trim()) return "Please enter your name."
    if (!formData.email.trim()) return "Please enter your email."
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Please enter a valid email."
    if (!formData.phone.trim()) return "Please enter your phone."
    if (!formData.message.trim()) return "Please enter a message."
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY)
      return "Email service is not configured. Please set the EmailJS environment variables."
    if (!recaptchaToken) return "Please complete the CAPTCHA."
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const errorMsg = validate()
    if (errorMsg) {
      toast({ title: "Validation error", description: errorMsg, variant: "destructive" })
      return
    }

    // Honeypot: if filled, likely a bot — pretend success without sending
    if (formData.company.trim().length > 0) {
      toast({ title: "Message received!", description: "Thanks for reaching out. I’ll get back to you shortly." })
      setFormData({ name: "", email: "", phone: "", message: "", company: "" })
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
      return
    }

    setIsSubmitting(true)
    toast({ title: "Sending...", description: "Please wait while we submit your message." })

    try {
      // IMPORTANT: keys match your EmailJS template variables
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          // Optional: send the captcha token too (good practice)
          recaptcha_token: recaptchaToken ?? "",
        },
        { publicKey: PUBLIC_KEY }
      )

      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I’ll get back to you soon.",
      })

      setFormData({ name: "", email: "", phone: "", message: "", company: "" })
      recaptchaRef.current?.reset()
      setRecaptchaToken(null)
    } catch (err) {
      console.error(err)
      toast({
        title: "Failed to send",
        description: "Something went wrong while sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-sora font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="font-sora text-2xl text-card-foreground flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Send a Message</span>
                </CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  Fill out the form below and I&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
                  {/* Honeypot (hidden) */}
                  <div className="hidden">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="font-inter"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="font-inter"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-card-foreground mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="font-inter"
                      placeholder="Mobile Number"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="font-inter min-h-[120px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* reCAPTCHA */}
                  <div className="flex justify-center">
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={RECAPTCHA_SITE_KEY}
                      onChange={(token) => setRecaptchaToken(token)}
                      onExpired={() => setRecaptchaToken(null)}
                      onErrored={() => setRecaptchaToken(null)}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !recaptchaToken}
                    className="w-full font-inter font-medium"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Card className="bg-card border-border hover:border-primary/50 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="font-sora text-xl text-card-foreground flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>Direct Email</span>
                </CardTitle>
                <CardDescription className="font-inter text-muted-foreground">
                  Prefer to email directly? Drop me a line anytime.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  className="w-full font-inter bg-transparent"
                  onClick={() => window.open("mailto:akshaymandaviya1409@gmail.com", "_blank")}
                >
                  akshaymandaviya1409@gmail.com
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-sora font-semibold text-card-foreground">Quick Response</span>
                </div>
                <p className="font-inter text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent matters, feel free to mention it in
                  your message.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
