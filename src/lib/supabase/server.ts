import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_https://efozfyhtqsmccsxeylma.supabase.co!,
    process.env.NEXT_sb_publishable_THsdObOFWT6PSIxtlrF71A_B-AwpZFI!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              cookieStore.set(name, value, options);
            });
          } catch {
            // Pode ser chamado em Server Component.
          }
        },
      },
    }
  );
}
