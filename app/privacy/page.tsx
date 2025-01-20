export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-gray-600 mb-8"><strong>Effective date:</strong> January 20, 2024</p>

      <div className="prose max-w-none">
        <p>
          At Bridge23 AI, Inc. ("Bridge23"), we recognize the trust you place in us when using our Services and take your privacy seriously. 
          Please read this Privacy Policy to learn how we treat your personal data. <strong>By using or accessing our Services in any manner, 
          you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and 
          share your information as described in this Privacy Policy.</strong>
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">What this Privacy Policy Covers</h2>
        <p>
          This Privacy Policy covers how we treat Personal Data that we gather when you access or use our Services. 
          "Personal Data" means any information that identifies or relates to a particular individual and also includes 
          information referred to as "personally identifiable information" or "personal information" under applicable 
          data privacy laws, rules or regulations. This Privacy Policy does not cover the practices of companies we 
          don't own or control or people we don't manage.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Personal Data</h2>
        <h3 className="text-xl font-semibold mt-6 mb-3">Categories of Personal Data We Collect</h3>
        <p>This list details the categories of Personal Data that we may collect:</p>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Profile or Contact Data</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>First and last name</li>
            <li>Email</li>
            <li>Job title</li>
            <li>Company</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Payment Data</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>Payment card type</li>
            <li>Last 4 digits of payment card</li>
            <li>Billing address, phone number, and email</li>
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="text-lg font-semibold">Communication Data</h4>
          <ul className="list-disc pl-6 mt-2">
            <li>Meeting recording</li>
            <li>Meeting transcript</li>
            <li>Meeting calendar event information</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <p>
          If you have any questions or comments about this Privacy Policy, the ways in which we collect and use your 
          Personal Data or your choices and rights regarding such collection and use, please do not hesitate to 
          contact us at support@bridge23.ai.
        </p>

        <div className="mt-8 pt-8 border-t">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Bridge23 AI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
} 