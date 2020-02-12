const style = () => ({
  paperInput: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    backgroundColor: '#ffffff3b',
    margin: '0 auto'
  },
  paperDescription: {
    padding: '0px 4px',
    alignItems: 'center',
    width: 350,
    borderRadius: 10,
    backgroundColor: 'ffffff14',
    margin: '0 auto'
  },
  input: {
    marginLeft: 1,
    flex: 1,
  },
  inputDescription: {
    width: 335,
    marginLeft: 12,
    marginBottom: -5
  },
  iconButton: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  divider: {
    height: 28,
    margin: 4,
  },
  errorText: {
    textAlign: 'center', 
    marginTop: -10,
    color: '#f12222',
    fontSize: 14
  },
});

export default style;
