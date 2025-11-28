This system provides:
1-AI Chat Module
-Accepts user questions via API
-Returns a mocked AI response (simulating OpenAI)
-Stores:
-question
-AI response
-token usage
-Tracks user usage and enforces monthly limits:
-Every user gets 3 free messages per month
-Beyond that, they must have an active subscription
-Supports multiple subscription bundles per user
-Uses latest remaining quota (priority-based deduction)
-Automatically resets free quota at the start of each month
-Simulates OpenAI API delay
-Throws structured, meaningful errors
2-Subscription Module
-Users can create subscriptions:
-Basic (10 messages)
-Pro (100 messages)
-Enterprise (Unlimited)
-Supports monthly or yearly billing
-Auto-renew logic with random payment failure simulation
-Allows cancellation (usage history stays intact)
