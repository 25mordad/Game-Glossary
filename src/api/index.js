import axios from 'axios';
const corsUrl = "http://0.0.0.0:8080/";


const Api = (url,data) => {


    if (!localStorage.getItem('token')) {

      let params = new URLSearchParams();
      params.append('grant_type', 'client_credentials');
      params.append('client_id', "8sw09jo6mw0fbzr8218zktyvhg5nol");
      params.append('client_secret', "eqf23i39ai13jiy2ccap3dn4n83l3n");

      axios.post(`https://id.twitch.tv/oauth2/token`, params )
              .then(res => {
                  localStorage.setItem('token', res.data.access_token);
                  window.location.href = '/';
                })
    }

    return axios({
    url: corsUrl+url,
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Client-ID': '8sw09jo6mw0fbzr8218zktyvhg5nol',
        'Authorization': 'Bearer '+localStorage.getItem('token'),
    },
    data: data

    });
}

export default Api;
