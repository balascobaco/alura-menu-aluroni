import { useState } from 'react';
import styles from './Ordenador.module.scss';
import opcoes from './opcoes.json';
import classNames from 'classnames';
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

interface Props {
	ordenador: string;
	setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

const Ordenador = ({ ordenador, setOrdenador }: Props) => {
	const [aberto, setAberto] = useState(false);
	const nomeOrdenador =
		ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

	return (
		<button
			className={classNames({
				[styles.ordenador]: true,
				[styles['ordenador--ativo']]: ordenador !== '',
			})}
			onClick={() => setAberto(!aberto)}
			onBlur={() => setAberto(false)}
		>
			<span>{nomeOrdenador || 'Ordenar por'}</span>
			{!aberto && <MdOutlineKeyboardArrowDown size={22} />}
			{aberto && <MdOutlineKeyboardArrowUp size={22} />}
			<div
				className={classNames({
					[styles.ordenador__options]: true,
					[styles['ordenador__options--ativo']]: aberto,
				})}
			>
				{opcoes.map((opcao) => (
					<div
						className={styles.ordenador__option}
						key={opcao.value}
						onClick={() => setOrdenador(opcao.value)}
						aria-hidden="true"
					>
						{opcao.nome}
					</div>
				))}
			</div>
		</button>
	);
};

export default Ordenador;
