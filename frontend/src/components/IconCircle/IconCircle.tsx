import './IconCircle.css';
import { Icon, IconProps } from '../Icons/Icon';

export const IconCircle = ({ name }: IconProps) => {

  return (
    <div className="icon-circle">
      <Icon name={name} />
    </div>
  );
}