
import { CustomProvider } from 'rsuite'
import './App.css'
import { Layout } from './components/Layout'
import { Routes } from './routes'
import { useContextUI } from './context/uicontext'

export const App=()=>{
  const {theme}=useContextUI()

  return  <Layout>
  <CustomProvider theme={theme}>
    <Routes />
  </CustomProvider>
  </Layout>
}

