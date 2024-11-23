import React, { FC } from 'react';
import { useTitle } from 'react-use';
import copy from 'copy-to-clipboard';
import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@material-ui/core';
import { useRawQuery } from '../../hooks';

type AuthCallbackContainerProps = {
  title: string;
  pageTitle: string;
};

export const AuthCallbackContainer: FC<AuthCallbackContainerProps> = ({ pageTitle }) => {
  useTitle(pageTitle);

  const { code } = useRawQuery();

  return (
    <Container maxWidth={'md'}>
      <br />
      <br />
      <br />
      <Typography variant={'h3'}>Привіт</Typography>
      <Typography variant={'h5'}>Скопіюйте код та надішліть боту</Typography>
      <br />
      <Card variant={'elevation'}>
        <CardContent>
          <Box component={'code'} style={{ wordWrap: 'break-word' }}>
            ${code}
          </Box>
        </CardContent>
        <CardActions>
          <Button variant={'contained'} color={'secondary'} onClick={() => copy(code as string)}>
            Копіювати
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};
