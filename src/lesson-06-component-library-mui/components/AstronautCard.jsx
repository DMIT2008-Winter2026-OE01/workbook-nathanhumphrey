/*
Update the following using MUI components. The following will be helpful:

- https://mui.com/material-ui/react-box/
- https://mui.com/material-ui/react-card/
- https://mui.com/material-ui/api/card-content/
- https://mui.com/material-ui/react-chip/
- https://mui.com/material-ui/react-stack/
- https://mui.com/material-ui/icons/

*/

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

export default function AstronautCard(
  { astronaut },
) {
  // Get the required properties from the astronaut object
  const { agency, bio, date_of_birth: dateOfBirth, image, name, nationality, status } = astronaut;
  const { thumbnail_url: thumbnailUrl } = image;
  const nationalityName = nationality[0].name;
  const { abbrev } = agency;
  const { name: statusName } = status;
  const statusStyles = {
    Active: { bgcolor: 'success.main', color: 'success.contrastText' },
    Retired: { bgcolor: 'info.main', color: 'info.contrastText' },
    Deceased: { bgcolor: 'grey.700', color: 'common.white' },
  };
  const chipStyle = statusStyles[statusName] ?? { bgcolor: 'grey.500', color: 'common.white' };

  return (
    <Card
      component="li"
      variant="outlined"
      sx={{ mb: 2, borderRadius: 2 }}
    >
      <CardContent>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          alignItems={{ xs: 'flex-start', sm: 'flex-start' }}
        >
          <Box
            component="img"
            src={thumbnailUrl}
            alt={name}
            sx={{
              width: 80,
              height: 80,
              borderRadius: 1,
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />

          <Box sx={{ flex: 1 }}>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={1}
              justifyContent="space-between"
              alignItems={{ xs: 'flex-start', md: 'center' }}
            >
              <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
                {name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                born {dateOfBirth}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 0.5 }}>
              <Chip
                size="small"
                icon={<FlightTakeoffIcon />}
                label={statusName}
                sx={{
                  ...chipStyle,
                  '& .MuiChip-icon': { color: 'inherit' },
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {nationalityName} ({abbrev})
              </Typography>
            </Stack>

            <Typography variant="body2" sx={{ mt: 1.5 }}>
              {bio}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
