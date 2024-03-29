import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () =>{
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader/>
            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                    See All
                </Text>
            </Flex>
            <SuggestedUser name="mohith" followers={1392} avatar="" />
            <SuggestedUser name="varun" followers={328} avatar=""/>
            <SuggestedUser name="charan" followers={765} avatar=""/>

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
            © 2023 Built By{" "}
            <Link href="https://github.com/guruswarupa" target="_blank" color="blue.500" fontSize={13}>Guru Swarupa</Link>
            </Box>
        </VStack>
    )
}

export default SuggestedUsers;