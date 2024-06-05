import { createClient } from "@/utils/supabase/server"
import Form from './form'

export default async function Example() {
  const supabase = createClient()
  const user = (await supabase.auth.getUser()).data.user
  
  const accountData = await supabase.from('profiles').select("*").eq('id', user.id);
  console.log(accountData)

  return (
  <div>
    <Form user={user.email} data={accountData.data[0]}/>
  </div>)
}
