import React, { FC } from 'react';
import { useTitle } from 'react-use';
import { Box, Button, Divider, Grid, Hidden, Paper, Typography } from '@material-ui/core';
import { LogoVariant } from '../../enums';
import { AppView, Link, Logo } from '../../components';
import {
  ABCNumbersPrivacyPolicyRoute,
  ABColorsPrivacyPolicyRoute,
  deckKeeperPrivacyPolicyRoute,
  learningTogetherPrivacyPolicyRoute,
} from '../../routes';

type HomeContainerProps = {
  pageTitle: string;
};

export const HomeContainer: FC<HomeContainerProps> = ({ pageTitle }) => {
  useTitle(pageTitle);

  const apps = [
    {
      id: '6455684710',
      name: 'Learning together',
      description:
        'Your baby will be able to explore a variety of colors, letters, numbers and shapes by selecting them on the screen while listening to their names.',
      logo: '/logos/learning-together.png',
      privacyPolicyRoute: learningTogetherPrivacyPolicyRoute,
    },
    {
      id: '6456039757',
      name: 'DeckKeeper',
      description:
        'This app provides the ultimate gaming experience. You no longer have to waste time shuffling cards or choosing the next card - DeckKeeper does it all automatically.',
      logo: '/logos/DeckKeeper.png',
      privacyPolicyRoute: deckKeeperPrivacyPolicyRoute,
    },
    {
      id: '1597079749',
      name: 'ABColors',
      description:
        'This application will help your kid learn colors by choosing them and listening to their names, as well as the kid can easily test their knowledge in the game where you need to find a color.',
      logo: '/logos/ABColors.png',
      privacyPolicyRoute: ABColorsPrivacyPolicyRoute,
    },
    {
      id: '1638628911',
      name: 'ABC Numbers',
      description:
        'This application will help your kid learn numbers by choosing them and listening to their names, as well as the kid can easily test their knowledge in the game where you need to find a number.',
      logo: '/logos/ABC-Numbers.png',
      privacyPolicyRoute: ABCNumbersPrivacyPolicyRoute,
    },
  ];

  return (
    <AppView overflow={'auto'}>
      <Box py={5} px={3} bgcolor={'#444444'} color={'#fff'} display={'flex'} justifyContent={'center'}>
        <Logo variant={LogoVariant.Page} />
      </Box>

      <Box pt={5} pb={10} px={3} maxWidth={1200} mx={'auto'}>
        <Grid container spacing={3}>
          {apps.map(({ id, name, description, logo, privacyPolicyRoute }) => (
            <Grid md={6} item key={id}>
              <Paper elevation={3}>
                <Box display={'flex'} alignItems={'start'} gridGap={24} pt={2} px={2}>
                  <Hidden only={'xs'}>
                    <img alt={name} src={logo} title={name} width={130} />
                  </Hidden>

                  <Box>
                    <Typography gutterBottom variant="h5">
                      <strong>{name}</strong>
                    </Typography>
                    <Typography color="textSecondary">{description}</Typography>
                  </Box>
                </Box>

                <Box mt={3} px={2} pb={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                  <a href={`https://apps.apple.com/us/app/id${id}`} target={'_blank'} rel="noreferrer">
                    <img src={'/app-store.png'} alt={'Download from App Store'} width={130} />
                  </a>

                  <Link route={privacyPolicyRoute}>[ Privacy Policy ]</Link>
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
    </AppView>
  );
};
