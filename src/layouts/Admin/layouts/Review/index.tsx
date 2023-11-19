import {
  Center,
  Flex,
  Grid,
  Image,
  Input,
  Pagination,
  Paper,
  Rating,
  Stack,
  UnstyledButton,
} from '@mantine/core';
import {
  IconSearch,
  IconBellRinging,
  IconAdjustmentsHorizontal,
} from '@tabler/icons-react';
import { Typography } from '../../../../common/components/Typography';
import Colors from '../../../../common/components/Colors';

import image1 from '../../../../assets/images/homepage/image 21-1.png';
import image2 from '../../../../assets/images/homepage/image 21.png';
import image3 from '../../../../assets/images/homepage/image 22-1.png';
import image4 from '../../../../assets/images/homepage/image 22.png';
import image5 from '../../../../assets/images/homepage/image 23-1.png';
import image6 from '../../../../assets/images/homepage/image 23.png';

import { DatePickerInput } from '@mantine/dates';

const list = [image1, image2, image3, image4, image5, image6];

function Review() {
  return (
    <Stack gap={32} m={32}>
      <Flex gap={24} align="center">
        <Input
          placeholder="Tìm kiếm..."
          rightSection={<IconSearch size={16} />}
          size="md"
          style={{
            flex: 1,
          }}
        />
        <IconBellRinging />
        <Typography.HeadLine5>
          Good moring, <span style={{ fontWeight: 'bold' }}>Admin</span>
        </Typography.HeadLine5>
      </Flex>

      <Flex align="center" justify="space-between">
        <Typography.HeadLine3>Đánh giá</Typography.HeadLine3>

        <Flex align="center" bg={Colors.White} p={10} gap={12}>
          <Center bg={Colors.Grey3} p={12}>
            <IconAdjustmentsHorizontal size={24} />
          </Center>
          <DatePickerInput
            type="range"
            label="Lọc theo kỳ"
            variant="unstyled"
            defaultValue={[new Date(), new Date()]}
          />
        </Flex>
      </Flex>

      <Grid>
        {list.map((item, index) => (
          <Grid.Col key={index} span={4}>
            <Paper shadow="xs" p="xl">
              <Stack>
                <Grid>
                  <Grid.Col span={6}>
                    <Typography.HeadLine5 fw="bold">
                      Jennie Kim
                    </Typography.HeadLine5>
                    <Typography.Body2>1 ngày trước</Typography.Body2>
                    <Typography.Body2 my={16}>
                      Faucibus at bibendum quisque dolor tristique sed. Integer
                      eget sed risus vulputate. Eget egestas viverra cursus
                      pretium. Ut mi nisl sit nisl.
                    </Typography.Body2>
                    <Flex align="center" gap={8}>
                      <Rating value={5} color={Colors.Brown} />
                      <Typography.HeadLine5>5.0</Typography.HeadLine5>
                    </Flex>
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <Image src={item} fit="contain" />
                  </Grid.Col>
                </Grid>
                <Flex justify="center" gap={108} mt={24}>
                  <UnstyledButton>
                    <Typography.Body1>Ẩn</Typography.Body1>
                  </UnstyledButton>
                  <UnstyledButton>
                    <Typography.Body1>Xoá</Typography.Body1>
                  </UnstyledButton>
                </Flex>
              </Stack>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>

      <Center>
        <Pagination total={5} color={Colors.Brown} />
      </Center>
    </Stack>
  );
}

export default Review;
