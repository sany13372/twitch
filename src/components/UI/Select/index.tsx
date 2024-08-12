import {Dropdown} from "flowbite-react";
import styles from './Select.module.scss'

interface ISelect<T> {
    title: string
    options: T[]
}

const Select = <T extends { title: string }>({title, options}: ISelect<T>) => {
    return (
        <Dropdown label="Dropdown"  renderTrigger={() => <span className={styles.select}>{title}</span>}>
            <div className={styles.selectBody}>
                {options.map((option) => <Dropdown.Item role="dropdown" as="div" key={option.title} className={styles.selectBodyItem}
                                                        onClick={() => alert('Dashboard!')}>{option.title}</Dropdown.Item>)}
            </div>
        </Dropdown>
    );
}

export default Select;