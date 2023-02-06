import React, { useState } from 'react';
import {
  Drawer,
  Box,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Divider,
  styled,
} from '@mui/material';

import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import { drawerWidth } from '@/pages/sugang';

// 정말 공통된것만 입력! sx는 기존 스타일과 통합해버리기 때문에 overwriting이 불가능하다.
// 내부의 공통적인 스타일을 컴포넌트로 재정의하고 나머지는 인라인 sx props로 처리한다.
// 컴포넌트와 겹치는 부분은 !important를 이용한다.(!important: 1순위 <- 인라인 스타일링: 2순위 <-> 재사용 스타일링: 3순위)
const SugangNavList = styled(List)`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding-bottom: 0;

  .MuiListItemButton-root {
    padding-left: 20px;
    padding-right: 20px;
  }

  .MuiTypography-root {
    font-weight: 700;
    opacity: 0.8;
  }

  .MuiListItemIcon-root {
    min-width: 0;
    margin-right: 12px;
  }

  .MuiSvgIcon-root {
    font-size: 23;
    opacity: 0.8;
  }
`;

const menuItems = [
  {
    label: '검색',
    icon: <ManageSearchIcon />,
  },
  {
    label: '피드백',
    icon: <ChatIcon />,
  },
];

export default function SugangNav({ selected, onSelect }) {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ '& .MuiPaper-root': { width: drawerWidth } }}
    >
      <SugangNavList>
        <SugangNavHead />
        <Divider />

        <SugangNavMenu selected={selected} onSelect={onSelect} />
        <Divider />

        <Box sx={{ flex: 1 }}></Box>
        <Divider />

        <SugangNavSub />
      </SugangNavList>
    </Drawer>
  );
}

function SugangNavHead() {
  return (
    <Box>
      <ListItemButton sx={{ px: '12px!important' }}>
        <ListItemIcon sx={{ fontSize: 24 }}>📚</ListItemIcon>
        <ListItemText
          primary="Zustand"
          primaryTypographyProps={{
            sx: { fontSize: 17, letterSpacing: -1, opacity: '1!important' },
          }}
        />
      </ListItemButton>
    </Box>
  );
}

function SugangNavMenu({ selected, onSelect }) {
  const [open, setOpen] = useState(true);
  const onToggle = () => setOpen(!open);

  return (
    <Box>
      <ListItemButton onClick={onToggle}>
        <ListItemText primary="메뉴" />
        <KeyboardArrowDown
          sx={{
            transition: '0.2s',
            transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
          }}
        />
      </ListItemButton>

      <Box>
        {open &&
          menuItems.map((item, id) => (
            <ListItemButton
              key={item.label}
              onClick={() => onSelect(id)}
              selected={id === selected}
              sx={{ py: 0 }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
      </Box>
    </Box>
  );
}

function SugangNavSub() {
  return (
    <Box>
      <ListItemButton onClick={() => alert('Firestore')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="로그인" />
      </ListItemButton>
    </Box>
  );
}
