import React from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import { pkg, VERSION } from '@/config';

import styles from './FeedBack.module.less';

interface FeedBackProps {
  showVersion?: boolean;
  className?: string;
}

const FeedBack = (props: FeedBackProps) => {
  const { showVersion = true } = props;
  return (
    <a
      className={classnames(styles.wrapper, props.className)}
      target="_blank"
      rel="noopener noreferrer"
      href={pkg.issues}
    >
      <QuestionCircleOutlined className={styles.icon} />
      {__i18n('问题反馈')}
      {showVersion ? `v${VERSION}` : ''}
    </a>
  );
};

export default FeedBack;
