import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField, Typography } from '@mui/material';
import { theme } from '../config/theme';

const ButtonBuddha = styled(Button)(() => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 4,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 40,
  padding: '0 30px',
  margin: '20px',
  [theme.breakpoints.down('sm')]: {
    margin: '20px 0',
  },

  '&:hover': {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
}));

const TextAreaBuddha = styled(TextField)(() => ({
  width: '100%',
  margin: '20px 0',
  borderRadius: 4,
  backgroundColor: '#f9f9f9',
  fontSize: '1em',
  boxSizing: 'border-box',
  margin: '1rem 0',
  resize: 'vertical',
  [theme.breakpoints.down('sm')]: {
    margin: '20px 0',
    width: '90%',
  },

  label: {
    color: '#444',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #FF8E53',
    },

    '&:hover fieldset': {
      border: '1px solid #FE6B8B',
    },

    '&.Mui-focused fieldset': {
      border: '1px solid #FE6B8B',
    },
  },
}));

const ResponseTypography = styled(Typography)(() => ({
  background: 'linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);',
  width: '100%',
  maxWidth: '500px',
  margin: '20px 0',
  border: '1px solid #ccc',
  borderRadius: 4,
  padding: '10px',
  marginTop: '20px',
  borderadius: '4px',

  [theme.breakpoints.down('sm')]: {
    margin: '20px 0',
    width: '90%',
  },

  label: {
    color: '#444',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #FF8E53',
    },

    '&:hover fieldset': {
      border: '1px solid #FE6B8B',
    },

    '&.Mui-focused fieldset': {
      border: '1px solid #FE6B8B',
    },
  },
}));

const TitleTypography = styled(Typography)(() => ({
  fontSize: '2em',
  color: '#222',
  margin: '40px 0 30px 0',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    marginTop: '32px',
  },
}));

const SubTypography = styled(Typography)(() => ({
  fontSize: '1em',
  color: '#444',
  marginBottom: '20px',
  marginTop: 0,
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2em',
    width: '90%',
  },
}));

const IntroTypography = styled(Typography)(() => ({
  fontSize: '1em',
  color: '#444',
  marginBottom: '20px',
  marginTop: 0,
  fontWeight: 400,
  [theme.breakpoints.down('sm')]: {
    fontSize: '1em',
    width: '90%',
  },
}));

const BuddhaInput = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      fetch('api/chatApi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
        .then((res) => res.json())
        .then((data) => {
          setResponse(data.message);
          setLoading(false);
        });
    } catch (error) {
      setError(!error);
    }
  };
  return (
    <>
      <TitleTypography variant="h1">Ask the Buddha AI</TitleTypography>
      <SubTypography variant="h4">
        He speaks every language. He speaks the language of the soul
      </SubTypography>
      <IntroTypography>
        Do you need motivation? - Do you need advice? - Do you have
        existentional doubts?
      </IntroTypography>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextAreaBuddha
          id="outlined-multiline-static"
          value={message}
          onChange={handleChange}
          label="Ask the Buddha"
          multiline
          rows={3}
        />

        <ButtonBuddha type="submit">Send</ButtonBuddha>
      </form>
      {loading ? (
        <ResponseTypography>
          <b>Buddha:</b> I am thinking...
        </ResponseTypography>
      ) : (
        response && (
          <ResponseTypography>
            <b>Buddha:</b> {response}
          </ResponseTypography>
        )
      )}
      {error && (
        <div className={styles.response}>
          <b>Disciple:</b> Sorry the Budha is restint right now
        </div>
      )}
    </>
  );
};

export default BuddhaInput;
