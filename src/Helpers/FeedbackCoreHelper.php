<?php
/**
 * Created by PhpStorm.
 * User: Cristian Benescu
 * Date: 11.09.17
 * Time: 14:23
 */

namespace Feedback\Helpers;


use Plenty\Plugin\ConfigRepository;

class FeedbackCoreHelper
{

    const PLUGIN_NAME = 'Feedback';
    const KEY_RELEASE_FEEDBACKS_AUTOMATICALLY = "releaseFeedbacks";
    const KEY_MAXIMUM_NR_FEEDBACKS = "numberOfFeedbacks";
    const KEY_TIMESTAMP_VISIBILITY = "timestampVisibility";
    const KEY_ALLOW_NO_RATING_FEEDBACK = "allowNoRatingFeedback";
    const KEY_ALLOW_FEEDBACKS_ONLY_IF_PURCHASED = "allowFeedbacksOnlyIfPurchased";
    const KEY_SHOW_EMPTY_RATINGS_IN_CATEGORY_VIEW = "showEmptyRatingsInCategoryView";




    /**
     * @var $config
     */
    private $config;

    /**
     * FeedbackCoreHelper constructor.
     * @param ConfigRepository $config
     */
    public function __construct(ConfigRepository $config)
    {
        $this->config = $config;
    }

    /**
     * @param string $key
     * @return mixed
     */
    public function configValue(string $key)
    {
        return  $this->config->get(self::PLUGIN_NAME . '.' . $key);
    }
}