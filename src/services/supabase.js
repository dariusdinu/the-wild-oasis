import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ckzqsblqkkbbvfkvutyh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrenFzYmxxa2tiYnZma3Z1dHloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3Njc5NDEsImV4cCI6MjA0NTM0Mzk0MX0.Bjj4ZX7rebrk7QlP3O2gkrppxfODlcfxgsb4B47jBJc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
