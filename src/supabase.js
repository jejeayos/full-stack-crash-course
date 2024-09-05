import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xtydzhilrmbqvxdtbgsv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0eWR6aGlscm1icXZ4ZHRiZ3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNTUzNjcsImV4cCI6MjAzMjgzMTM2N30.leTFXYwFQm2n_Z3d0uNbwI4vMK2kFGBFvhgtQUV_rVI'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;