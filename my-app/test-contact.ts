import { writeClient } from "@/sanity/lib/writeClient";

async function createTestSubmission() {
  const doc = await writeClient.create({
    _type: "contactSubmission",
    name: "Test User",
    email: "test@example.com",
    message: "This is a test message.",
    submittedAt: new Date().toISOString(),
    status: "new",
  });
  console.log("Created doc:", doc._id);
}

createTestSubmission();