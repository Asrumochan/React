import cron from "node-cron";
import Applications from "../models/applications.model.js";
import { Resend } from "resend";
import transporter from "./utils/transporter.js";
import dotenv from 'dotenv';

dotenv.config()
console.log(process.env.EMAIL);


cron.schedule("* * * * *", async () => {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      // to: "paridaasrumochan476@gmail.com",
      to: "padhi.sital1@gmail.com",
      subject: "Sorry Baby",
      html: `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<style>
@keyframes heartbeat {
  0% { transform: scale(1); }
  25% { transform: scale(1.08); }
  50% { transform: scale(1); }
  75% { transform: scale(1.08); }
  100% { transform: scale(1); }
}

.heart{
    display:inline-block;
    animation:heartbeat 1.5s infinite;
}
</style>

</head>

<body style="margin:0;padding:0;background:#ffeef2;font-family:Arial,Helvetica,sans-serif;">

<table align="center" width="650" cellpadding="0" cellspacing="0"
style="background:white;border-radius:18px;margin-top:30px;box-shadow:0 5px 25px rgba(0,0,0,.15);padding:40px;">

<tr>
<td align="center">

<img
src="https://media.tenor.com/2roX3uxz_68AAAAC/cute-bear.gif"
width="220"
alt="Cute Teddy Bear"
style="border-radius:12px;">

<h1 style="color:#ff4d79;font-size:42px;margin-bottom:0;">
I'm Really Sorry 🥺
</h1>

<div class="heart" style="font-size:55px;margin:10px 0;">
❤️
</div>

<p style="font-size:20px;color:#666;">
Hey Beautiful,
</p>

<p style="font-size:18px;color:#666;line-height:1.8;">
I know I messed up...
</p>

<p style="font-size:18px;color:#666;line-height:1.8;">
I never wanted to hurt you.
If I could rewind time, I'd choose every word more carefully just to keep that beautiful smile on your face.
</p>

<p style="font-size:18px;color:#666;line-height:1.8;">
You're my favorite person, my peace, my happiness, and honestly...
life feels incomplete when you're upset with me.
</p>

<p style="font-size:18px;color:#666;line-height:1.8;">
I promise to learn from my mistakes and become someone who deserves your smile every single day.
</p>

<div style="font-size:60px;margin:20px 0;">
🐻🌹💖🐰
</div>

<h2 style="color:#ff4d79;">
Can we start over? ❤️
</h2>

<a href="#"
style="
background:#ff4d79;
color:white;
padding:16px 40px;
border-radius:30px;
text-decoration:none;
font-size:20px;
font-weight:bold;
display:inline-block;
margin-top:10px;">
💖 Please Forgive Me 💖
</a>

<hr style="margin:40px 0;border:none;border-top:1px solid #eee;">

<p style="font-size:20px;color:#888;">
No matter what...
</p>

<p style="font-size:28px;color:#ff4d79;font-weight:bold;">
I'll always choose You ❤️
</p>

<p style="font-size:18px;color:#999;margin-top:30px;">
Forever yours,
</p>

<h2 style="color:#ff4d79;margin-top:5px;">
Your Idiot 🤍🥺
</h2>

<p style="font-size:13px;color:#bbb;margin-top:35px;">
Made with love, countless apologies, and a heart that only belongs to you. ❤️
</p>

</td>
</tr>

</table>

</body>
</html>`,
    });

    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.log(error);
  }
})