<?php

namespace App\Services\Bookmark;

use App\Services\Bookmark\Contracts\Parser;
use Symfony\Component\DomCrawler\Crawler;

class CrawlerParser implements Parser
{
    /**
     *
     * Crawler instance.
     *
     * @var \Symfony\Component\DomCrawler\Crawler
     */
    private $crawler;

    /**
     *
     * Info for parsing by Crawler.
     *
     * @var array
     */
    private $xPathes;

    /**
     * Create a new parser service instance.
     *
     * @param \Symfony\Component\DomCrawler\Crawler $crawler
     * @return void
     */
    public function __construct(Crawler $crawler)
    {
        $this->crawler = $crawler;
        $this->setXPathes();
    }

    /**
     * Set xPathes property.
     *
     * @return void
     */
    private function setXPathes(): void
    {
        $this->xPathes = [
            'title' => [
                '//title',
                'text'
            ],
            'favicon' => [
                '//link[@rel="shortcut icon"]',
                'attr',
                'href'
            ],
            'meta_description' => [
                '//meta[@name="description"]',
                'attr',
                'content'
            ],
            'meta_keywords' => [
                '//meta[@name="keywords"]',
                'attr',
                'content'
            ]
        ];
    }

    /**
     *
     * Get parsed data.
     *
     * @param string $url
     * @return array
     */
    public function parse(string $url): array
    {
        $this->crawler->add(file_get_contents($url));
        foreach ($this->xPathes as $name => $xPath) {
            $element = $this->crawler->filterXPath($xPath[0]);
            $parsedData[$name] = ($element->count() === 1) ? $this->getDataFromElement($xPath, $element) : '';
        }
        return $parsedData;
    }

    /**
     *
     * Get date from html element by Crawler.
     *
     * @param array $xPath
     * @param \Symfony\Component\DomCrawler\Crawler $element
     * @return string
     */
    private function getDataFromElement(array $xPath, Crawler $element): string
    {
        if (isset($xPath[2])) {
            return $element->{$xPath[1]}($xPath[2]);
        }
        return $element->{$xPath[1]}();
    }
}
