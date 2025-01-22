export default function TermsOfService() {
  return (
    <div className="container mx-auto px-4 pt-16 md:pt-20 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <p className="text-gray-600 mb-8"><strong>Effective date:</strong> January 20, 2024</p>

      <div className="prose max-w-none">
        <p className="font-medium">
          THESE TERMS OF SERVICE (the "Agreement") GOVERN CUSTOMER'S RECEIPT, ACCESS, TO AND USE OF THE SERVICE (AS DEFINED BELOW) 
          PROVIDED BY BRIDGE23 AI, INC. ("Bridge23"). IN ACCEPTING THIS AGREEMENT BY (A) PURCHASING ACCESS TO THE SERVICE THROUGH 
          AN ONLINE ORDERING PROCESS THAT REFERENCES THIS AGREEMENT, (B) SIGNING UP FOR A FREE ACCESS PLAN FOR THE SERVICE THROUGH 
          A SCREEN THAT REFERENCES THIS AGREEMENT, OR (C) CLICKING A BOX INDICATING ACCEPTANCE, CUSTOMER AGREES TO BE BOUND BY ITS TERMS.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. The Service</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">1.1. Service Description</h3>
            <p>
              Bridge23 is the owner and provider of a cloud-based software for meeting automations (the "Service"). 
              Anything Customer (including Users) posts, uploads, shares, stores, or otherwise provides through the 
              Service is considered a "User Submission." Customer is solely responsible for all User Submissions it 
              contributes to the Service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">1.2. Customer's Subscription</h3>
            <p>
              Subject to the terms of this Agreement, Customer may purchase a subscription to, and has the right to 
              access and use, the Service as specified in one or more ordering screens agreed to by the parties through 
              Bridge23's website that reference this Agreement and describe the business terms related to Customer's 
              subscription ("Order(s)").
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">1.3. Bridge23's Ownership</h3>
            <p>
              Bridge23 owns the Service, Software, Bridge23 Content, Documentation, and anything else provided by 
              Bridge23 to Customer (collectively the "Bridge23 Materials"). Bridge23 retains all right, title and 
              interest in and to the Bridge23 Materials.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. Restrictions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">2.1. Customer's Responsibilities</h3>
            <p>
              Customer is responsible for all activity on its Users' accounts unless such activity is caused by a 
              third party bad actor able to access Customer's account by exploiting vulnerabilities in the Service itself.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">2.2. Use Restrictions</h3>
            <p>
              Customer agrees that it will not, and will not allow Users or third parties to, directly or indirectly:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>Modify, translate, copy or create derivative works based on the Service</li>
              <li>Reverse engineer or attempt to discover the source code of the Service</li>
              <li>Sell, resell, rent, lease, or otherwise commercially exploit the Service</li>
              <li>Use the Service in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access or interfere with the Service</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Information</h2>
        <p>
          For any questions about these Terms of Service, please contact us at support@bridge23.ai.
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