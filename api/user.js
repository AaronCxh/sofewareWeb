import request from '@/utils/request'

export function login(data) {
  const { username, password } = data
  return request({
    url: '/platform/h5/Ajax/AjaxMethod.aspx',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    transformRequest: [
      function(data) {
        let ret = ''
        for (const it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        ret = ret.substring(0, ret.lastIndexOf('&'))
        return ret
      }
    ],
    data: {
      type: 'newadminlogin',
      _accountname: username,
      _accountpwd: password,
      _checkcode: '',
      _skin: 'h5',
      temp: Math.random()
    },
    responseType: 'json'
  })
}