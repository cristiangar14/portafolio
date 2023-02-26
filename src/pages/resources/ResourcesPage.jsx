import { Container, TextField, ThemeProvider } from '@mui/material';
import { onValue, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import db from '../../../firebase';
import SmallCard from '../../components/pure/cardSource/SmallCard';
import Loader from '../../components/pure/loader/Loader';
import theme from '../../theme';

import './resourcePage.scss';

const initialStateLoading = {
  dataLoading: true,
};

const ResourcesPage = () => {
  const [data, setData] = useState([]);
  const [dataSearch, setDataSearch] = useState([]);
  const [loading, setLoading] = useState(initialStateLoading);
  const [inputSearch, setInputSearch] = useState('');

    useEffect(() => {
      setLoading({ dataLoading: true });
      const startAboutText = ref(db, '/resources');
      onValue(startAboutText, (snapshot) => {
          setData(snapshot.val());
          setLoading({ dataLoading: false });
        }, {
          onlyOnce: true,
        });
    }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const inpSearch = e.target.value.toLowerCase();
    const search = data.filter(({ title, category, description }) => title.toLowerCase().includes(inpSearch) || category.toLowerCase().includes(inpSearch) || description.toLowerCase().includes(inpSearch));
    setInputSearch(inpSearch);
    setDataSearch(search);
  };

    return loading.dataLoading
    ? (
      <Loader />
    )
    : (
      <Container className="resources">
        <h1>Recursos</h1>
        <div className="resources--search">
          <div className="resources--search__input">
            <ThemeProvider theme={theme}>
              <TextField
                label="Buscar"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={handleSearch}
                type="text"
              />
            </ThemeProvider>
          </div>
          {
            inputSearch.length > 0 && (
              dataSearch.length
              ? (
                <div className="resources--container resources--search__container">
                  {
                    dataSearch.map((el) => {
                      return <SmallCard key={`sources-${el.id}`} data={el} />;
                    })
                  }
                </div>
              )
              : (
                <p className="resources--search__notFount">Sin resultados para su busqueda.</p>
              )
            )
          }
        </div>
        <div className="resources--container">
          {
            inputSearch.length === 0 && (
                data.map((el) => {
                  return <SmallCard key={`sources-${el.id}`} data={el} />;
                })
                )
          }
        </div>
      </Container>
    );
};

export default ResourcesPage;
