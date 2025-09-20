import css from './VoteOptions.module.css'
import type {VoteType} from '../../types/votes'


interface VoteOptionsProps {
  readonly onVote: (type: VoteType) => void;
  readonly onReset: () => void;
  readonly canReset: boolean;
}

export default function VoteOptions({ onVote, onReset, canReset }: VoteOptionsProps) {
  return (
    <div className={css.container}>
        <button onClick={() => onVote('good')} type='button' className={css.button}>Good</button>
        <button onClick={() => onVote('neutral')} type='button' className={css.button}>Neutral</button>
        <button onClick={() => onVote('bad')} type='button' className={css.button}>Bad</button>
        {canReset && (
            <button
            type="button"
            className={`${css.button} ${css.reset}`}
            onClick={onReset}
            >
            Reset
            </button>
        )}
    </div>
  );
};