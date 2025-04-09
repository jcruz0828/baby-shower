export default function ThankYou() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "linear-gradient(135deg, #cfe9ff, #e0f2fe, #f0f9ff)",
      animation: "backgroundFloat 10s ease-in-out infinite",
      textAlign: "center",
      padding: "2rem",
    }}>
      <h1 style={{
        fontSize: "2.5rem",
        fontWeight: "800",
        color: "#1e3a8a",
        marginBottom: "1rem"
      }}>
        🎉 Thank You!
      </h1>
      <p style={{
        fontSize: "1.2rem",
        color: "#334155"
      }}>
        Your RSVP has been submitted. We can't wait to celebrate with you!
      </p>
    </div>
  );
}
