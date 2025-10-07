import styles from './Footer.module.css';
import { Container, Center, Cluster, Grid, Stack, Box, Button, Input, Textarea, Icon } from '../../ui';
import { useTranslation } from 'react-i18next';
import { Copy, Facebook, Copyright } from '../../ui/icons';

const Footer = () => {
    const { t } = useTranslation();
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('labuka', e)
    }

    return (
        <Container as='footer' maxWidth='100vw' padding='0' className={`font-rubik ${styles.footer}`}>
            <Container className={styles.footerInner} maxWidth='var(--layout-width)' padding='0'>
                <Grid space='var(--s-128)'>
                    <Stack space='var(--s-16)'>
                        <Box className={styles.header}>
                            {t('footer:header')}
                        </Box>

                        <Box className={styles.email}>
                            <span>terapija@jaustis.lt</span>                                
                            <Icon icon={<Copy />} label={t('footer:copyEmail')} cursorPointer={true} />
                        </Box>

                        <Box className={styles.subHeader}>{t('footer:subHeader')}</Box>
                        <Box>
                            <Button 
                                className={styles.cta}
                                label={t('footer:cta')} 
                                onClick={handleClick} 
                            />
                        </Box>
                        <Box className={styles.facebook}>
                            <Icon label='facebook' icon={ <Facebook /> } cursorPointer={true} align='center' />
                        </Box>
                    </Stack>

                    <Stack space='1rem'>
                        <Grid>
                            <Input placeholder={t('footer:name')} />
                            <Input placeholder={t('footer:email')}/>
                        </Grid>
                        <Textarea placeholder={t('footer:message')} />
                        <Button label={t('footer:send')} className={styles.sendButton} />
                    </Stack>
                </Grid>
            </Container>

            <Container maxWidth='100vw' padding='0' className={styles.footerBottom}>
                <Center intrinsic={true}>
                    <Cluster align='center' className={styles.footerBottomContent} gap='1rem'>
                        <Icon label='2025 jaustis' icon={<Copyright />} align='center' sizeType='ex'/> | 
                        <Box>{t('footer:privacy')}</Box> |
                        <Box>{t('footer:terms')}</Box>
                    </Cluster>
                    
                </Center>
            </Container>
        </Container>
    );
};

export default Footer;