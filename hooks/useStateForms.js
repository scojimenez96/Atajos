import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { saveToken, getToken } from '../helpers/storage'

function useStateForms() {
  const [dataRegister, setDataRegister] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    organizationName: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [search, setSearch] = useState({
    search: ''
  });

  const history = useHistory();
  const [loading, setLoading] = useState(false)


  const verification = (_token) => {
    if (loading) return;
    setLoading(true);
    if (_token) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false)
        console.log("validation", getToken());
        history.replace('/loginscreen');

      }, 5000);
    } else {
      //setloadUser(false);
      setLoading(false)
    }
  }


  const handleInputChange = (e) => {
    setDataRegister({
      ...dataRegister, [e.target.name]: e.target.value
    })
    setSearch({
      ...search, [e.target.name]: e.target.value
    })

  }

  const postRegister = (e) => {
    e.preventDefault();
    axios
      .post('https://stisocialmetrics04.azurewebsites.net/api/signup'
        , { ...dataRegister })
      .then(response => {
        const _userToken = response.data.token;
        saveToken(_userToken);
        verification(_userToken)
      });
  }

  const postLogin = (e) => {
    e.preventDefault();
    axios
      .post('https://stisocialmetrics04.azurewebsites.net/api/login',
        { ...dataRegister })
      .then(response => {
        const _userToken = response.data.token;

        saveToken(_userToken);
        verification(_userToken);

        console.log(response)
        console.log(_userToken)
      })
      .catch(error => {
        console.log(error);
        alert('no existe usuario');
      });
  }

  const postForgotPassword = (e) => {
    e.preventDefault();
    axios
      .post('https://stisocialmetrics04.azurewebsites.net/forgot'
        , { ...dataRegister })
      .then((data) => {
        console.log(JSON.stringify(data, null, 4))
        console.log("funciona")
      });
    setDataRegister({
      email: ''
    })
  }

  return { dataRegister, search, handleInputChange, postRegister, postLogin, postForgotPassword, verification, loading };
}

export default useStateForms;