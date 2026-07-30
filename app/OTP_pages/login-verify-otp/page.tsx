import VerifyOtpForm from "@/components/account/verifyformotp";

export default async function LoginVerifyOtpPage({
  searchParams,
}: {
  searchParams: Promise<{
    email?: string;
  }>;
}) {
  const params = await searchParams;

  const email = params.email ?? "";

  return (
    <VerifyOtpForm email={email} />
  );
}
