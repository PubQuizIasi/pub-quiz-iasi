import React, { useEffect } from 'react';
import { Autocomplete, TextField, Theme } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { GameResultsFiltersKeys, Season } from '../../../types/gameResults';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { paths } from '../../../common';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  getGameResultsFiltersTrigger,
  getGameResultsTrigger,
  getSeasonLeaderboardTrigger,
  setGameResultsFilters,
} from '../gameResultsSlice';
import { selectFilters, selectFiltersData, selectFiltersLoading } from '../selectors';
import { selectIsAdmin } from '../../Login/selectors';
import Button from '../../../components/Button/Button';
import Loader from '../../../components/Loader';
import { GAME_RESULTS_FILTERS_OVERALL_RANKING } from '../../../types/common';

const useStyles = makeStyles()((theme: Theme) => ({
  filtersContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '100px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginLeft: '50px',
      marginRight: '50px',
    },
  },
  filter: {
    width: '300px',
  },
  gameFilter: {
    marginLeft: '16px',
  },
  button: {
    marginLeft: '30px',
  },
}));

const GameResultsFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const filtersData: Season[] = useAppSelector(selectFiltersData);
  const { season, game } = useAppSelector(selectFilters);
  const { t } = useTranslation('gameResults');
  const { classes } = useStyles();
  const isAdmin = useAppSelector(selectIsAdmin);
  const filtersLoading = useAppSelector(selectFiltersLoading);

  useEffect(() => {
    if (filters.game === GAME_RESULTS_FILTERS_OVERALL_RANKING) {
      dispatch(getSeasonLeaderboardTrigger({ season: filters.season }));
    } else if (filters.game) {
      dispatch(getGameResultsTrigger(filters));
    }
  }, [filters.game, filters.season, dispatch, filters]);

  useEffect(() => {
    dispatch(getGameResultsFiltersTrigger());
  }, [dispatch]);

  const getSeasons = () => filtersData.map((obj) => obj.season);
  const getGames = () => {
    const games = filtersData.find((obj) => obj.season === Number(season))?.games ?? [];
    return [GAME_RESULTS_FILTERS_OVERALL_RANKING, ...games];
  };

  const handleChange = (value: number | null, key: keyof typeof GameResultsFiltersKeys) => {
    if (key === GameResultsFiltersKeys.season) {
      dispatch(setGameResultsFilters({ [GameResultsFiltersKeys.game]: null }));
    }
    dispatch(setGameResultsFilters({ [key]: value }));
  };

  return (
    <div className={classes.filtersContainer}>
      <Loader loading={filtersLoading} loadingMessage={t('loadingMessage.filters')}>
        <Autocomplete
          className={classes.filter}
          options={getSeasons()}
          blurOnSelect="touch"
          renderInput={(params) => <TextField {...params} label={t('filters.season')} />}
          onChange={(_, value) => handleChange(value, GameResultsFiltersKeys.season)}
          value={season}
          noOptionsText={t('filters.noSeasons')}
          getOptionLabel={(option) => String(option)}
        />
        <Autocomplete
          className={clsx(classes.filter, classes.gameFilter)}
          options={getGames()}
          blurOnSelect="touch"
          renderInput={(params) => <TextField {...params} label={t('filters.game')} />}
          onChange={(_, value) => handleChange(value, GameResultsFiltersKeys.game)}
          value={game}
          noOptionsText={t('filters.noGames')}
          getOptionLabel={(option) =>
            option === GAME_RESULTS_FILTERS_OVERALL_RANKING
              ? t(`filters.${option}`)
              : String(option)
          }
        />
        {isAdmin && (
          <Link to={paths.newGame}>
            <Button className={classes.button} variant="contained">
              {t('buttons.newGame')}
            </Button>
          </Link>
        )}
      </Loader>
    </div>
  );
};

export default GameResultsFilters;
