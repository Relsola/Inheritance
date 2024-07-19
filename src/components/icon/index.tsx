import { Suspense, lazy, useMemo } from 'react';

const Icon: React.FC<IconProps> = props => {
  const Icon = useMemo(
    () => lazy(() => import(`@/icons/${props.name}.tsx`)),
    [props.name]
  );

  return (
    <Suspense fallback={<div className="w6 h6"></div>}>
      {Icon && <Icon {...props} />}
    </Suspense>
  );
};

export default Icon;
