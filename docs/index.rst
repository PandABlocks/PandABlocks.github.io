:html_theme.sidebar_secondary.remove:

.. include:: ../README.rst
    :end-before: when included in index.rst

How the documentation is structured
-----------------------------------

The documentation is split into 4 sections:

.. grid:: 2
    :gutter: 4

    .. grid-item-card:: :material-regular:`directions_run;3em`

        .. toctree::
            :caption: Tutorials
            :maxdepth: 1

            tutorials/tutorial1_blinking_leds.rst
            tutorials/tutorial2_position_capture.rst
            tutorials/tutorial3_position_compare.rst
            tutorials/tutorial4_snake_scan.rst


        +++

        Tutorials for installation and typical usage. New Users start here.

    .. grid-item-card:: :material-regular:`task;3em`

        .. toctree::
            :caption: How-to Guides
            :maxdepth: 1

            how-to/contribute
            how-to/update-tools
            how-to/make-release
            how-to/run-container
	    how-to/remote.rst

        +++

        Practical step-by-step guides for day-to-day dev tasks and more experienced users.

    .. grid-item-card:: :material-regular:`apartment;3em`

        .. toctree::
            :caption: Explanations
            :maxdepth: 1

            explanations/decisions

        +++

        Explanations of how and why the architecture is why it is.

    .. grid-item-card:: :material-regular:`description;3em`

        .. toctree::
            :caption: Reference
            :maxdepth: 1

            reference/standards
            reference/migration_guide
            reference/release_compatibility
            ../genindex

        +++

        Technical reference material on standards in use.
The Existing Documentation for the PandABlocks projects can be found:

======================= =====================================================
PandABlocks-FPGA        https://PandABlocks.github.io/PandABlocks-FPGA
PandABlocks-rootfs      https://PandABlocks.github.io/PandABlocks-rootfs
PandABlocks-server      https://PandABlocks.github.io/PandABlocks-server
PandABlocks-webcontrol  https://PandABlocks.github.io/PandABlocks-webcontrol
PandABlocks-client      https://PandABlocks.github.io/PandABlocks-client
======================= =====================================================

.. toctree::
    :hidden:

    user/index
    developer/index
