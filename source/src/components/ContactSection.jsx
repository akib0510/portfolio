import React, { useState } from 'react';
import { Mail, MapPin, Send, Copy, Check, MessageSquare, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export default function ContactSection({ personal }) {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepares mailto link for direct sending
    const subject = encodeURIComponent(formData.subject || `Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct info & social cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2 font-mono">
              <MessageSquare className="w-4 h-4" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let’s Create Something Extraordinary Together.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Have an upcoming branding campaign, YouTube series, commercial poster project, or full-time role? I’m ready to collaborate.
            </p>

            <div className="space-y-4 pt-4">
              {/* Email Card with Copy button */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-neutral-400">Direct Email</span>
                    <a
                      href={personal.socials.email}
                      className="text-sm font-semibold text-white hover:text-amber-400 transition-colors"
                    >
                      {personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center justify-between group hover:border-neutral-700 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-neutral-400">LinkedIn Profile</span>
                    <span className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                      in/akib-hossian-dipu
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-neutral-400">Location</span>
                  <span className="text-sm font-semibold text-white">{personal.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-neutral-400 mb-6">
              Fill out this form and it will prepare a direct email inquiry to {personal.email}.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
                <Check className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Email Client Opened!</h4>
                <p className="text-xs text-neutral-300">
                  Your inquiry message was formatted and your email client was triggered. Looking forward to talking!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-3 text-xs text-amber-400 underline font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. YouTube Thumbnail Series / Commercial Campaign"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe your project requirements, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-neutral-950 font-bold text-sm shadow-xl shadow-orange-500/20 hover:scale-[1.01] transform transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
