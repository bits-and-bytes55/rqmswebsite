// server.js (Backend)
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:5173',
  'https://rqmseconsultancyservices.com',
  'http://localhost:5174',
  'http://127.0.0.1:3000',
  'http://127.0.0.1:5173',
  
  'https://yourdomain.com',
  'https://www.yourdomain.com',
  'https://your-app-name.netlify.app',
  'https://your-app-name.vercel.app',
  'https://your-app-name.firebaseapp.com',
  'https://your-app-name.onrender.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// ===== REMOVED: app.options('*', cors(corsOptions)); =====
// This line is no longer needed and causes errors.

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  console.log('Origin:', req.headers.origin);
  next();
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Server is running",
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

app.post("/api/send-enquiry", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !service || !message) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields: name, email, service, message"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name must be at least 2 characters long"
    });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message must be at least 10 characters long"
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const companyMailOptions = {
      from: `"RQMS Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_COMPANY || process.env.EMAIL_USER,
      subject: `New Enquiry from ${name} - ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: 600; color: #4f46e5; }
            .value { margin-top: 4px; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #4f46e5; }
            .footer { text-align: center; padding: 15px; color: #94a3b8; font-size: 14px; border-top: 1px solid #e2e8f0; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">📩 New Enquiry Received</h2>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">📱 Phone</div>
                <div class="value">${phone || "Not provided"}</div>
              </div>
              <div class="field">
                <div class="label">💼 Service</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message</div>
                <div class="value">${message}</div>
              </div>
              <div class="footer">
                <p>This enquiry was sent from your website contact form.</p>
                <p>📅 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                <p>🌐 IP: ${req.ip || req.connection.remoteAddress}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      replyTo: email,
    };

    const userMailOptions = {
      from: `"RQMS Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting RQMS",
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #4f46e5, #7c3aed); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 8px 8px; }
            .footer { text-align: center; padding: 15px; color: #94a3b8; font-size: 14px; border-top: 1px solid #e2e8f0; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2 style="margin: 0;">Thank You for Contacting RQMS! 🙏</h2>
            </div>
            <div class="content">
              <p>Dear <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to RQMS (Reliable Quality Management System). We have received your enquiry regarding <strong>${service}</strong>.</p>
              <p>Our team will review your message and get back to you within <strong>24 hours</strong>.</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
              <p><strong>Your enquiry details:</strong></p>
              <ul>
                <li><strong>Service:</strong> ${service}</li>
                <li><strong>Message:</strong> ${message}</li>
              </ul>
              <p style="margin-top: 20px;">If you have any urgent queries, please feel free to call us at <strong>+91 70423 22362</strong>.</p>
              <p>Best regards,<br><strong>RQMS Team</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} RQMS - Reliable Quality Management System</p>
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await Promise.all([
      transporter.sendMail(companyMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully! We'll get back to you within 24 hours."
    });

  } catch (error) {
    console.error("❌ Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send enquiry. Please try again or contact us directly at +91 70423 22362."
    });
  }
});

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong! Please try again."
  });
});

// ===== 404 HANDLER =====
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API endpoint not found"
  });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`\n🚀 Server running on http://localhost:${PORT}`);
  console.log(`📧 Email service ready`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔒 CORS enabled for ${allowedOrigins.length} origins\n`);
});