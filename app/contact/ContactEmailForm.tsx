"use client";

import type { FormEvent } from "react";
import styles from "./page.module.css";

const recipient = "markus@chroniclemusic.co.za";

function getFormValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function ContactEmailForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = getFormValue(formData, "name");
    const email = getFormValue(formData, "email");
    const enquiryType = getFormValue(formData, "type");
    const subject = getFormValue(formData, "subject") || "Chronicle enquiry";
    const message = getFormValue(formData, "message");

    const body = [
      "Chronicle Music Publishing enquiry",
      "",
      `Name: ${name || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Enquiry type: ${enquiryType || "Not selected"}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message || "No message provided.",
    ].join("\n");

    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form className={styles.formCard} onSubmit={handleSubmit}>
      <p className={styles.eyebrow}>Start a Conversation</p>
      <h2>Prepare your enquiry</h2>
      <p className={styles.formIntro}>
        Tell us a bit about your needs and we&apos;ll get back to you.
      </p>

      <div className={styles.fields}>
        <label>
          <span>Your Name</span>
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email Address</span>
          <input type="email" name="email" placeholder="you@example.com" />
        </label>
        <label>
          <span>Enquiry Type</span>
          <select name="type" defaultValue="">
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option value="Publishing Discussion">Publishing Discussion</option>
            <option value="Production Discussion">Production Discussion</option>
            <option value="Catalogue / Selected Works">
              Catalogue / Selected Works
            </option>
            <option value="Licensing / Sync Preparation">
              Licensing / Sync Preparation
            </option>
            <option value="Artist or Creator Development">
              Artist or Creator Development
            </option>
          </select>
        </label>
        <label>
          <span>Subject</span>
          <input type="text" name="subject" placeholder="Brief subject" />
        </label>
        <label>
          <span>Tell Us More</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Share details about your work, project, or rights."
          />
        </label>
      </div>

      <button type="submit">
        Send Enquiry <span aria-hidden="true">-&gt;</span>
      </button>
      <p className={styles.formNote}>
        <span aria-hidden="true">[]</span> This opens your email app with the
        enquiry addressed to Markus.
      </p>
    </form>
  );
}
