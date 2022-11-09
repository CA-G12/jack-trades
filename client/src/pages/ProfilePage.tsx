/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState, useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useParams, Outlet } from 'react-router-dom';
import { UserInfo, Loading } from '../components';
import { UserProduct, UserInfoTypes } from '../interfaces';

const ProfilePage:FC = () => {
  const [info, setInfo] = useState<UserInfoTypes | null >(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { userId } = useParams();

  const fetchData = async () => {
    try {
      const userInfo = await axios.get(`/api/v1/user/${userId}`);

      setInfo({ ...userInfo.data, id: userId });
      setIsLoading(false);
    } catch (error) {
      Swal.fire(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [userId]);

  if (isLoading || (!info)) return <Loading className="loading" />;
  return (
    <Box className="user-profile">
      <UserInfo info={info} />
      <Outlet />
    </Box>
  );
};

export default ProfilePage;
