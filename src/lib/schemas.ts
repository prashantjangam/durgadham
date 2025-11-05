import { z } from "zod";

export const donationSchema = z.object({
  name: z.string().min(2, { message: "कृपया पूर्ण नाव प्रविष्ट करा." }),
  contact: z.string().min(10, { message: "कृपया वैध संपर्क क्रमांक प्रविष्ट करा." }),
  amount: z.coerce
    .number({ required_error: "कृपया देणगीची रक्कम प्रविष्ट करा." })
    .positive({ message: "रक्कम सकारात्मक असणे आवश्यक आहे." }),
  paymentMethod: z.enum(["online", "cash", "cheque"], {
    required_error: "कृपया देयकाची पद्धत निवडा.",
  }),
});

export type DonationFormValues = z.infer<typeof donationSchema>;

export const memberSchema = z.object({
  name: z.string().min(2, { message: "कृपया पूर्ण नाव प्रविष्ट करा." }),
  email: z.string().email({ message: "कृपया वैध ईमेल प्रविष्ट करा." }),
  phone: z.string().min(10, { message: "कृपया वैध संपर्क क्रमांक प्रविष्ट करा." }),
  address: z.string().min(5, { message: "कृपया आपला पत्ता प्रविष्ट करा." }),
});

export type MemberFormValues = z.infer<typeof memberSchema>;
