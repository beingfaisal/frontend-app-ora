import { useIntl } from '@edx/frontend-platform/i18n';

import { useGlobalState } from 'data/services/lms/hooks/selectors';
import { stepNames, stepStates } from 'data/services/lms/constants';

import messages from './messages';

const useInstructionsMessage = (step = null) => {
  const { formatMessage } = useIntl();
  const {
    activeStepName,
    effectiveGrade,
    stepState,
  } = useGlobalState();
  const stepName = step || activeStepName;
  if (step || stepState !== stepStates.inProgress || stepName === stepNames.staff) {
    return null;
  }
  if (stepName === stepNames.done) {
    return formatMessage(messages[stepNames.done], effectiveGrade);
  }
  return formatMessage(messages[activeStepName]);
};

export default useInstructionsMessage;
