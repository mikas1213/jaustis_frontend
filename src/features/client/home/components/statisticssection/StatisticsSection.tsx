import styles from './StatisticsSection.module.css';
import { Switcher } from '../../../../../components/ui';
const StatisticsSection = () => {
	return (
        <section className={styles.statistion}>
            <Switcher limit={4}>
                <div>yra</div>
            </Switcher>
        </section>
    );
};

export default StatisticsSection;
