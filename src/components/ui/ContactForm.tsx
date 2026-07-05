"use client";

import { useState } from "react";

interface ContactFormProps {
  onSubmit?: (data: {
    name: string;
    phone: string;
    message: string;
  }) => Promise<void>;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      if (onSubmit) {
        // İleride API entegrasyonu için
        await onSubmit(formData);
      } else {
        // Şimdilik mock başarı
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setStatus("success");
      setFormData({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <span className="text-3xl mb-3 block">✅</span>
        <h3 className="text-lg font-semibold text-green-800 mb-1">
          Mesajınız Alındı
        </h3>
        <p className="text-sm text-green-700">
          En kısa sürede size dönüş yapacağız.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-medium text-green-700 underline hover:text-green-900"
        >
          Yeni mesaj gönder
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Ad Soyad */}
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Ad Soyad
        </label>
        <input
          type="text"
          id="contact-name"
          name="name"
          required
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
          placeholder="Adınız Soyadınız"
        />
      </div>

      {/* Telefon */}
      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Telefon
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          required
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors"
          placeholder="05XX XXX XX XX"
        />
      </div>

      {/* Mesaj */}
      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Mesaj
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none transition-colors resize-none"
          placeholder="Mesajınızı yazın..."
        />
      </div>

      {/* Hata Mesajı */}
      {status === "error" && (
        <p className="text-sm text-red-600">
          Bir hata oluştu. Lütfen tekrar deneyin.
        </p>
      )}

      {/* Gönder Butonu */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
      >
        {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
      </button>
    </form>
  );
}
