import React from 'react'
import { useForm, usePlugin, useCMS } from 'tinacms'
// 1. Import `InlineForm`
import { InlineForm } from 'react-tinacms-inline'
import { Hero } from '../components/Hero'
import data from '../content/data.json'

export default function Home() {
  const cms = useCMS()
  const formConfig = {
    id: '../content/data.json',
    label: 'hero',
    initialValues: data,
    onSubmit() {
      cms.alerts.success('Saved!')
    },
  }

  const [pageData, form] = useForm(formConfig)
  usePlugin(form)

  // 2. Wrap `InlineForm` around `Hero`, pass the form
  return (
    <div className="home">
      <InlineForm form={form}>
        <Hero {...pageData} />
      </InlineForm>
    </div>
  )
}