export const sendEmail = async ({ to, subject, html }) => {
  const resend = new Resend("re_Umqy22nd_FoDPbKWFkuvU6S9qeuJthCDB");
  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to,
    subject,
    html,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
cron.schedule("* * * * *", async () => {
  console.log("asru");
  const result = await sendEmail({
    to: "asrumochanparida99@gmail.com",
    subject: "Application Created",
    html: `
    <p> Successfully application created </p>
    `,
    });
  console.log(result)
});
