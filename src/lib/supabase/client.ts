import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_https://efozfyhtqsmccsxeylma.supabase.co!,
    process.env.NEXT_sb_publishable_THsdObOFWT6PSIxtlrF71A_B-AwpZFI!
  );
}
