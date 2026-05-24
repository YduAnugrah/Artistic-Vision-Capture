import { Router } from "express";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, event_date, message } = req.body as Record<string, string>;

    const formData = new URLSearchParams();
    formData.append("access_key", "38a41153-4d27-4999-a6c7-dbde7d6f1c33");
    formData.append("name", name ?? "");
    formData.append("email", email ?? "");
    formData.append("phone", phone ?? "");
    formData.append("event_date", event_date ?? "");
    formData.append("message", message ?? "");
    formData.append("subject", `New Inquiry from ${name ?? "a visitor"} — Archana Digital Studio`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });

    const data = (await response.json()) as { success: boolean; message?: string };

    if (response.ok && data.success) {
      res.json({ success: true });
    } else {
      res.status(400).json({ success: false, message: data.message ?? "Submission failed." });
    }
  } catch (err) {
    req.log.error(err, "contact form error");
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
});

export default contactRouter;
