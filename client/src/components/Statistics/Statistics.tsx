/* eslint-disable max-len */
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
} from '@mui/material';
import './Statistics.css';
import { IStatistic } from '../../interfaces';

const Statistics = () => {
  const [statistics, setStatistics] = useState<IStatistic | null>(null);

  useEffect((): void => {
    const getStatistics = async () => {
      const res = await axios({
        method: 'GET',
        url: '/api/v1/website/statistics',
      });

      setStatistics(res.data);
    };

    getStatistics();
  }, []);

  return (
    <Box
      bgcolor="#3388b8"
      color="#E2E8EB"
      width="100%"
    >
      <Stack direction="row" justifyContent="center" textAlign="center" mt="5rem">
        <Box padding="4rem 0" flex={1}>
          <Typography variant="h3" fontWeight="bolder">{statistics?.exchangeTimes}</Typography>
          <Typography
            variant="subtitle2"
            fontSize="1.3rem"
            fontWeight="bold"
            mt=".5rem"
          >
            Exchanges

          </Typography>
        </Box>
        <Box className="addingSelectors" position="relative" padding="4rem 0" flex={1}>
          <Typography variant="h3" fontWeight="bolder">{statistics?.contributeTimes}</Typography>
          <Typography
            variant="subtitle2"
            fontSize="1.3rem"
            fontWeight="bold"
            mt=".5rem"
          >
            Contributions

          </Typography>
        </Box>
        <Box padding="4rem 0" flex={1}>
          <Typography variant="h3" fontWeight="bolder">{statistics?.donateTimes}</Typography>
          <Typography
            variant="subtitle2"
            fontSize="1.3rem"
            fontWeight="bold"
            mt=".5rem"
          >
            Donations

          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default Statistics;