"use client";

import { useState } from "react";
import styles from "./RsvpForm.module.css";
import { useRouter } from "next/navigation";
import confetti from "canvas-confetti";


const RsvpForm = () => {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [guests, setGuests] = useState(1);
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    formData.set("Attending", attending);
    formData.set("Guests", guests);
  
    try {
      const res = await fetch("https://formsubmit.co/beautiful1210felix@gmail.com", {
        method: "POST",
        body: formData,
      });
  
      if (res.ok) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.7 }
        });
        setTimeout(() => {
          router.push("/thank-you");
        }, 1000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    }
  };
  

  return (
    <div className={styles.container}>
      <form
        action="https://formsubmit.co/beautiful1210felix@gmail.com"
        method="POST"
        className={styles.form}
        onSubmit={handleSubmit}
      >
        <h1 className={styles.heading}>RSVP for the Baby Shower</h1>

        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Name:
          </label>
          <input
            id="name"
            className={styles.input}
            type="text"
            name="Name"
            required
            placeholder="Enter your name"
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Will you be attending?</label>
          <div className={styles.toggleGroup}>
            <button
              type="button"
              className={`${styles.toggleButton} ${
                attending === "yes" ? styles.active : ""
              }`}
              onClick={() => {
                setAttending("yes");
                setGuests(1);
              }}
            >
              Yes
            </button>
            <button
              type="button"
              className={`${styles.toggleButton} ${
                attending === "no" ? styles.active : ""
              }`}
              onClick={() => {
                setAttending("no");
                setGuests(0);
              }}
            >
              No
            </button>
          </div>
          {/* This hidden input sends the actual value to your email */}
          <input type="hidden" name="Attending" value={attending} />
        </div>

        {attending === "yes" && (
          <div className={`${styles.formGroup} ${styles.fadeIn}`}>
            <label htmlFor="guests" className={styles.label}>
              How many guests will you bring?
            </label>
            <input
              id="guests"
              className={styles.input}
              type="number"
              min="0"
              name="Guests"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value))}
              placeholder="e.g., 1"
            />
          </div>
        )}

        {/* Hidden config for FormSubmit behavior */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New RSVP Submission!" />
        <input type="hidden" name="_template" value="table" />

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default RsvpForm;
