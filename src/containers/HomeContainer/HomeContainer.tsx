import React, { FC } from 'react';
import { useTitle } from 'react-use';
import { Avatar, Box, Button, Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';

import { apps } from '../../apps';
import { Link, Logo } from '../../components';
import { LogoVariant } from '../../enums';
import { privacyPolicyRoute } from '../../routes';

type HomeContainerProps = {
  pageTitle: string;
};

export const HomeContainer: FC<HomeContainerProps> = ({ pageTitle }) => {
  useTitle(pageTitle);

  return (
    <>
      <Box py={5} px={3} bgcolor={'#444444'} color={'#fff'} display={'flex'} justifyContent={'center'}>
        <Logo variant={LogoVariant.Page} />
      </Box>

      <Box pt={5} pb={10} px={3} maxWidth={1200} mx={'auto'}>
        <Grid container spacing={3}>
          {apps.map(({ id, appleId, googleId, name, description, logo }) => (
            <Grid md={6} item key={id}>
              <Paper elevation={3}>
                <Box display={'flex'} alignItems={'start'} gridGap={24} pt={2} px={2}>
                  <Hidden only={'xs'}>
                    <img alt={name} src={logo} width={130} />
                  </Hidden>

                  <Box display={'flex'} flexDirection={'column'} gridGap={16}>
                    <Box display={'flex'} alignItems={'center'} gridGap={16}>
                      <Hidden smUp>
                        <Avatar variant="rounded" alt={name} src={logo} />
                      </Hidden>
                      <Typography variant="h5">
                        <strong>{name}</strong>
                      </Typography>
                    </Box>
                    <Typography color="textSecondary">{description}</Typography>
                  </Box>
                </Box>

                <Box mt={3} px={2} pb={2} display={'flex'} alignItems={'center'} gridGap={16}>
                  {appleId && <a href={`https://apps.apple.com/us/app/id${appleId}`} target={'_blank'} rel="noreferrer">
                    <img src={'/app-store.png'} alt={'Download from App Store'} width={130} />
                  </a>}

                  {googleId && <a href={`https://play.google.com/store/apps/details?id=${googleId}`} target={'_blank'} rel="noreferrer">
                    <img src={'/google-play-store.png'} alt={'Download from Google Play Store'} width={130} />
                  </a>}

                  <Link route={privacyPolicyRoute} query={{ appId: id }} style={{ marginLeft: "auto" }}>
                    [ Privacy Policy ]
                  </Link>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Divider variant={'middle'} component={Box} maxWidth={600} mx={'auto !important'} my={'60px !important'} />

        <Box mt={5} display={'flex'} alignItems={'center'} gridGap={24} justifyContent={'center'}>
          <Typography variant={'h4'}>Email us:</Typography>

          <Button
            variant={'contained'}
            size={'large'}
            color={'secondary'}
            href={'mailto:yashin.ziby@gmail.com?Subject=Contact from site "ZiBY Apps"'}
          >
            Send message
          </Button>
        </Box>
      </Box>
    </>
  );
};
