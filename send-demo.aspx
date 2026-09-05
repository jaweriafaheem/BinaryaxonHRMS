<%@ Page Language="C#" AutoEventWireup="true" %>
<%@ Import Namespace="System.Net" %>
<%@ Import Namespace="System.Net.Mail" %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.HttpMethod == "POST")
        {
            try
            {
                string productName = Request.Form["productName"] ?? "Not Specified";
                string name = Request.Form["name"] ?? "Anonymous";
                string email = Request.Form["email"] ?? "";
                string description = Request.Form["description"] ?? "";

                System.Net.ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

                // 1. Send Demo Request to leads@binaryaxon.com
                MailMessage demoMail = new MailMessage();
                demoMail.From = new MailAddress("leads@binaryaxon.com", "Binary Axon Demo Request");
                demoMail.To.Add("leads@binaryaxon.com");
                if (!String.IsNullOrEmpty(email))
                {
                    demoMail.ReplyToList.Add(new MailAddress(email, name));
                }
                demoMail.Subject = "Demo Request: " + productName;
                
                demoMail.Body = String.Format(
                    "<div style='font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; color: #333333;'>" +
                    "<div style='margin-bottom: 20px;'>" +
                    "<img src='https://www.binaryaxon.com/assets/images/blue-logo.png' alt='Binary Axon Logo' style='width: 170px; max-width: 170px; height: auto; display: block;' />" +
                    "</div>" +
                    "<h2 style='color: #635091; border-bottom: 2px solid #FFC132; padding-bottom: 8px; margin-top: 10px;'>New Demo Request</h2>" +
                    "<p style='font-size: 14px; line-height: 1.6;'><strong>Product:</strong> {0}</p>" +
                    "<p style='font-size: 14px; line-height: 1.6;'><strong>Name:</strong> {1}</p>" +
                    "<p style='font-size: 14px; line-height: 1.6;'><strong>Email:</strong> <a href='mailto:{2}' style='color: #635091;'>{2}</a></p>" +
                    "<p style='font-size: 14px; line-height: 1.6;'><strong>Requirements:</strong></p>" +
                    "<div style='padding: 15px; background: #f4f2f8; border-left: 4px solid #635091; border-radius: 6px; font-size: 14px; line-height: 1.6;'>{3}</div>" +
                    "</div>",
                    productName, name, email, description.Replace("\n", "<br/>")
                );
                demoMail.IsBodyHtml = true;
                demoMail.Headers.Add("Message-Id", String.Format("<{0}@binaryaxon.com>", Guid.NewGuid().ToString()));

                SmtpClient smtp = new SmtpClient("m06.internetmailserver.net");
                smtp.Credentials = new NetworkCredential("info@binaryaxon.com", "Info@123@!");
                smtp.EnableSsl = true;
                smtp.Port = 587;
                smtp.Send(demoMail);

                // 2. Send Confirmation Email to Client from leads@binaryaxon.com
                MailMessage clientMail = new MailMessage();
                clientMail.From = new MailAddress("leads@binaryaxon.com", "Binary Axon");
                clientMail.ReplyToList.Add(new MailAddress("leads@binaryaxon.com", "Binary Axon"));
                clientMail.To.Add(email);
                clientMail.Subject = "Demo Request Received - Binary Axon";
                clientMail.Body = String.Format(
                    "<div style='font-family: Arial, Helvetica, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; background-color: #ffffff; border: 1px solid #e0e0e0; border-radius: 12px; color: #333333;'>" +
                    "<p style='font-size: 15px; line-height: 1.6; margin-bottom: 16px;'>Dear <strong>{0}</strong>,</p>" +
                    "<p style='font-size: 14px; line-height: 1.6; margin-bottom: 16px;'>Thank you for requesting a demo for <strong>{1}</strong>.</p>" +
                    "<p style='font-size: 14px; line-height: 1.6; margin-bottom: 24px;'>Our team will contact you shortly to schedule a walkthrough.</p>" +
                    "<hr style='border: none; border-top: 1px solid #eaeaea; margin: 24px 0;' />" +
                    "<div>" +
                    "<img src='https://www.binaryaxon.com/assets/images/blue-logo.png' alt='Binary Axon Logo' style='width: 170px; max-width: 170px; height: auto; display: block; margin-bottom: 12px;' />" +
                    "<table role='presentation' style='border-collapse: collapse; font-size: 13px; color: #555555;'>" +
                    "<tr><td style='padding: 3px 8px 3px 0; font-weight: bold; color: #635091;'>Phone:</td><td style='padding: 3px 0;'><a href='tel:+923218961396' style='color: #333333; text-decoration: none;'>+92 321 896 1396</a></td></tr>" +
                    "<tr><td style='padding: 3px 8px 3px 0; font-weight: bold; color: #635091;'>Email:</td><td style='padding: 3px 0;'><a href='mailto:leads@binaryaxon.com' style='color: #635091; text-decoration: none;'>leads@binaryaxon.com</a></td></tr>" +
                    "<tr><td style='padding: 3px 8px 3px 0; font-weight: bold; color: #635091;'>Website:</td><td style='padding: 3px 0;'><a href='https://www.binaryaxon.com' target='_blank' style='color: #635091; text-decoration: none;'>www.binaryaxon.com</a></td></tr>" +
                    "<tr><td style='padding: 3px 8px 3px 0; font-weight: bold; color: #635091; vertical-align: top;'>Address:</td><td style='padding: 3px 0; line-height: 1.4;'>Plot # A-80, 1, Kathiawar Co-Operative Housing Society, Scheme 33, Karachi, Pakistan</td></tr>" +
                    "</table>" +
                    "</div>" +
                    "</div>",
                    name, productName
                );
                clientMail.IsBodyHtml = true;
                clientMail.Headers.Add("Message-Id", String.Format("<{0}@binaryaxon.com>", Guid.NewGuid().ToString()));
                smtp.Send(clientMail);

                // Send JSON and stop all further processing
                Response.Clear();
                Response.ContentType = "application/json";
                Response.Write("{\"success\": true}");
                Response.Flush();
                Response.SuppressContent = true;
                HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
            catch (System.Threading.ThreadAbortException)
            {
                // Ignore
            }
            catch (Exception ex)
            {
                Response.Clear();
                Response.ContentType = "application/json";
                Response.Write("{\"success\": false, \"message\": \"" + ex.Message.Replace("\"", "'") + "\"}");
                Response.Flush();
                Response.SuppressContent = true;
                HttpContext.Current.ApplicationInstance.CompleteRequest();
            }
        }
        else
        {
            Response.Redirect("index.html");
        }
    }
</script>