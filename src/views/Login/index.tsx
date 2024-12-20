import styles from './login.module.scss'
import './login.less'
import { Input, Space, Button, message } from 'antd';
import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import nProgress from 'nprogress';
import { captchaApi } from '../../request'
export default function index() {
  let navigateTO = useNavigate()
  const [usernameVal, setUsernameVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [captchaVal, setCaptchaVal] = useState('')
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value)
  }
  const toLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal);
    if (!usernameVal.trim()) {
      message.warning('用户名不能为空')
      return
    }
    if (!passwordVal.trim()) {
      message.warning('密码不能为空')
      return
    }
    if (!captchaVal.trim()) {
      message.warning('验证码不能为空')
      return
    }
    nProgress.start()
    message.success('login sunccessfully!')
    nProgress.done()
    navigateTO('/page1')
  }
  const getCaptchaApi = async () => {
    let captchaApiRes = await captchaApi()
    console.log(captchaApiRes);
  }
  return (
    <div className={styles.loginPage}>
      <div className={`${styles.loginBox} loginbox`}>
        <div className={styles.title}>
          <h1>前端通用后台系统</h1>
          <p>Strive Everyday</p>
        </div>
        <div className="form">
          <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange} />
            <Input.Password placeholder="密码" onChange={passwordChange} />
            <div className="captchaBox ">
              <Input placeholder="验证码" onChange={captchaChange} />
              <div className="captchaImg" onClick={getCaptchaApi}>
                <img src="https://www.tukuppt.com/index/down/code?time=1734521868" alt="" />
              </div>
            </div>
            <Button type="primary" block onClick={toLogin}>登录</Button>
          </Space>
        </div>
      </div>
    </div>
  )
}
